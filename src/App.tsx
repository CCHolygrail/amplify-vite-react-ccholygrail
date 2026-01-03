import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import S3VideoPlayer from "./components/S3VideoPlayer";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  
  // Example S3 URL - replace with your actual S3 object URL
  // For testing, you can use this sample video URL:
  const exampleS3VideoUrl = "https://ccholygrail-vdo-bucket.s3.us-east-1.amazonaws.com/%E0%B8%AD%E0%B8%98%E0%B8%B4%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5+%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B8%E0%B8%99.mp4";

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <main>
      <h1>Cheewin</h1>
      
      {/* S3 Video Player Demo */}
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Video Player Demo</h2>
        <p>Replace the URL below with your actual S3 object URL:</p>
        <S3VideoPlayer 
          s3Url={exampleS3VideoUrl}
          width={600}
          height={400}
          autoPlay={false}
          muted={false}
          loop={false}
        />
      </section>

      {/* Todo List Section */}
      <section>
        <h2>Todo List</h2>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </section>
      
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;

import Head from 'next/head'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={
          async()=>{
            try {
              await fetch('/api/up');
            } catch (error) {}
          }
        }>up</button>
        <button onClick={
          async()=>{
            try {
              await fetch('/api/down');
            } catch (error) {}
          }
        }>down</button>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button{
          width:200px;
          height:60px;
          margin:10px auto;
          background:#ccc;
          border:none;
          border-radius:4px;
          font-size:30px;
        }
        @media (max-width: 600px) {
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

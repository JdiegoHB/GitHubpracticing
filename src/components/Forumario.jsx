export default function Forumario() {
  return (
    <>
      <form onSubmit={()=> {}}>
        <label htmlFor="ja">Username</label>
        <input type="text" id="ja" />
        <label htmlFor="jo">Lastname</label>
        <input type="text" id="jo" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

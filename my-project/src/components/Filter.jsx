import Card from "./Card";
import Layout from "./Layout";
import Title from "./Title";

export default function Filter() {
  return (
    <>
      <div style={{ flex: 1, padding: "20px" }}>
        <Title />
        <div className="py-6">
          <Card />
        </div>
        <Layout />
      </div>
    </>
  );
}

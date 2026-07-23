import CustomList from '../components/CustomList.jsx';

const items = [
  'Item one',
  'Item two',
  'Item three',
  'Item four',
];

function ListPage() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Custom List Page</h1>
        <p>See a reusable list component in action on this route.</p>
      </header>

      <section className="component-grid">
        <CustomList items={items} title="Feature list" />
      </section>
    </div>
  );
}

export default ListPage;

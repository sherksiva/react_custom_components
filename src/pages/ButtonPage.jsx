import CustomButton from '../components/CustomButton.jsx';

function ButtonPage() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Custom Button Page</h1>
        <p>Use this page to preview a reusable button component.</p>
      </header>

      <section className="component-grid">
        <CustomButton text="Primary button" color="var(--primary)" onClick={() => alert('Primary clicked')} />
        <CustomButton text="Secondary action" color="var(--secondary)" onClick={() => alert('Secondary clicked')} />
      </section>
    </div>
  );
}

export default ButtonPage;

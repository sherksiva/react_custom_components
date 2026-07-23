import { useState } from 'react';
import CustomButton from '../components/CustomButton.jsx';
import CustomCard from '../components/CustomCard.jsx';
import CustomList from '../components/CustomList.jsx';
import CustomModal from '../components/CustomModal.jsx';

const items = [
  'Learn React component composition',
  'Create reusable UI elements',
  'Combine props and children',
];

function HomePage() {
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>React Multiple Custom Components</h1>
        <p>Build reusable components and combine them in a demo page.</p>
      </header>

      <section className="component-grid">
        <CustomCard
          title="Custom Button"
          description="A button component with customizable color and click handling."
          footer="Try clicking the button below"
        >
          <CustomButton
            text={`Clicked ${count} times`}
            color="var(--primary)"
            onClick={() => setCount((prev) => prev + 1)}
          />
        </CustomCard>

        <CustomCard
          title="Custom List"
          description="A list component that renders its items and a call-to-action."
          footer="Lists are perfect for menus, features, and steps."
        >
          <CustomList items={items} />
        </CustomCard>

        <CustomCard
          title="Custom Modal"
          description="A modal component that shows content in an overlay."
          footer="Open the modal to see how to compose children."
        >
          <CustomButton
            text="Open modal"
            color="var(--secondary)"
            onClick={() => setModalOpen(true)}
          />
        </CustomCard>
      </section>

      <CustomModal open={modalOpen} title="Example Modal" onClose={() => setModalOpen(false)}>
        <p>This modal uses a reusable custom component with children content.</p>
        <CustomButton text="Close" color="#2c3e50" onClick={() => setModalOpen(false)} />
      </CustomModal>
    </div>
  );
}

export default HomePage;

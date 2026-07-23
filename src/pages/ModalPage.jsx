import { useState } from 'react';
import CustomButton from '../components/CustomButton.jsx';
import CustomModal from '../components/CustomModal.jsx';

function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Custom Modal Page</h1>
        <p>Open the modal to see how this component behaves with route navigation.</p>
      </header>

      <section className="component-grid">
        <CustomButton text="Show modal" color="var(--primary)" onClick={() => setOpen(true)} />
      </section>

      <CustomModal open={open} title="Modal example" onClose={() => setOpen(false)}>
        <p>This modal can be opened from the modal page and closed with a reusable button.</p>
        <CustomButton text="Close modal" color="#2c3e50" onClick={() => setOpen(false)} />
      </CustomModal>
    </div>
  );
}

export default ModalPage;

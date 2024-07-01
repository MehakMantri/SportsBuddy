import React from 'react';

function Section({ id, title, description }) {
  return (
    <section id={id} className="bg-white p-8 text-center my-4">
      <h2 className="text-2xl mb-4">{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default Section;
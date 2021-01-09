import React from 'react';
import { useTabs } from './useTabs';

const contents = [
  {
    tab: 'Section 1',
    content: "I'm the content of Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of Section 2",
  },
  {
    tab: 'Section 3',
    content: "I'm the content of Section 3",
  },
  {
    tab: 'Section 4',
    content: "I'm the content of Section 4",
  },
];

const TabsApp = () => {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div>
      {contents.map((section, index) => (
        <button
          key={index}
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <br />
      {currentItem.content}
    </div>
  );
};

export default TabsApp;

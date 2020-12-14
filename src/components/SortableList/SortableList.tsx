import arrayMove from "array-move";
import React, { useCallback, useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import "./SortableList.styles.css";

const SortableItem = React.memo(
  SortableElement(({ value }: { value: string }) => (
    <li className="sortable-list-item">{value}</li>
  ))
);

const SortableList = React.memo(
  SortableContainer(({ items }: { items: string[] }) => (
    <ul className="sortable-list">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  ))
);

const SortableComponent: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setItems((state) => arrayMove(state, oldIndex, newIndex));
  }, []);

  return <SortableList items={items} onSortEnd={onSortEnd} />;
};

export default SortableComponent;

import React, { useState } from "react";

const activities: Activity[] = [
  {
    id: 1,
    title: "created the content",
    content: "the content haha has been created by kaung min khant",
  },
  {
    id: 2,
    title: "updated the content",
    content: "the content haha has been updated by kaung min khant",
  },
  {
    id: 3,
    title: "deleted the content",
    content: "the content haha has been deleted by kaung min khant",
  },
];

type Props = {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: () => {};
}[];

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-around">
        {activities.map((activity) => (
          <Activity
            title={activity.title}
            content={activity.content}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
};

const Activity = (props: Props) => {
  const { title, content, isOpen, setIsOpen } = props;
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div>{title}</div>

      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default Test;

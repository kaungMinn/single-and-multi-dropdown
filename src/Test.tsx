import { useState } from "react";

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

type ActivityBoxType = {
  id: number;
  title: string;
  content: string;
};

const ActivityBox: ActivityBoxType = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="">
        <div onClick={() => setIsOpen(!isOpen)}>{title}</div>

        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <div className="flex justify-between">
      {activities.map((activity, index) => {
        return <ActivityBox key={index} {...activity} />;
      })}
    </div>
  );
};

export default Test;

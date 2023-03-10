import { ArrowLineLeft } from "../../assets/Icons";
import { useMediaQuery } from "@mui/material";
import step from "../../pages/dummy-steps";

export const Breadcrumbs = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <ArrowLineLeft fillColor="#10494C" />
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export const StepHeader = ({ lesson }) => {
  const matches = useMediaQuery("(min-width:600px)");

  const itemsForDesktop = [
    { url: "/app/myTraining", label: "My Training" },
    { url: `/app/lesson/${lesson.id}`, label: `${lesson.title}` },
  ];

  const itemsForMobile = [
    { url: `/app/lesson/${lesson.id}`, label: `${lesson.title}` },
  ];

  return (
    <>
      {matches ? (
        <div>
          <Breadcrumbs items={itemsForDesktop} />
          <h4>{lesson.title}</h4>
        </div>
      ) : (
        <div>
          <Breadcrumbs items={itemsForMobile} />
          <h4>{lesson.name}</h4>
          <p>{step.title}</p>
        </div>
      )}
    </>
  );
};

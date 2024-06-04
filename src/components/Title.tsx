import "./Title.css";

type titleProps ={
  numTitle: string
  title: string
}

export const Title = (props: titleProps) => {
 
  const {title, numTitle}= props
 
  return (
    <h1 className="container-title">
      <span>{numTitle}</span>
      <span >{title}</span>
    </h1>
  );
};

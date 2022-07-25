import classes from "./IGTSummary.module.css";

const IGTSummary = (props) => {
  return <section className={classes.summary}>{props.children}</section>;
};

export default IGTSummary;

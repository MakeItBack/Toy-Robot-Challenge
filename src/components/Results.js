function Results(props) {
   const styles = {
      margin: "20px",
      borderRadius: "10px",
      backgroundColor: props.outputMessage.includes("INVALID") ? "red" : "grey",
      padding: "20px",
      color: "whitesmoke",
      width: "30%",
      boxSizing: "border-box",
   };

   return <p style={styles}>{props.outputMessage}</p>;
}

export default Results;

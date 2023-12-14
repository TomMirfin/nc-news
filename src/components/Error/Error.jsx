function Error(props) {
  const type = props.message.response.data.msg;
  const { message } = props.message;
  console.log(message);
  return (
    <div className="error-message">
      <p>{message} </p>
      <p className="">{type}</p>
    </div>
  );
}

export default Error;

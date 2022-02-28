function Num(array) {
  const numbers = array.numbers;
  const listItems = numbers.map((number, index) => (
    <div key={index} className="num" style={{ height: `${5 * number}px` }}>
      {number}
    </div>
  ));
  return <div>{listItems}</div>;
}
export default Num;

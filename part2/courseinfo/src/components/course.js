const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  );
}


const Part = ({part, exercises}) => {
  return(
  <li>
    {part} {exercises}
  </li>
  )
}


const Content = (props) => {
  return(
    <ul>
      {props.parts.map( (part) =>  <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </ul>
  )
}


const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
    </div>
  )
}
export default Course

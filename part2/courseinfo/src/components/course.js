const Header = (props) => {
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

const Total = (props) => {
  return(
    <p>total of {props.parts.reduce((total, part) => total + part.exercises, 0)} exercises</p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}
export default Course

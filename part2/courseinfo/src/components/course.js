const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  );
}


const Part = ({part, exercises}) => {
  return(
  <p>
    {part} {exercises}
  </p>
  )
}


const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
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

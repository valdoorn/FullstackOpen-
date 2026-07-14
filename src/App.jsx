//  1.1 Refactor the code so that it consists of three new components: Header, Content, and Total.

// 1.2 Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
      <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
      <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises:{" "}
        {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total  course={course}/>
    </>
  )
}

export default App;

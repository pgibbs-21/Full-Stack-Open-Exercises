const Header = ({ course }) => <h2>{course.name}</h2>;

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name}: {exercises}
        </p>
    );
};

const Content = ({ parts }) => {
    return parts.map((part) => {
        return (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
    });
};

const Total = ({ parts }) => {
    return (
        <div>
            Total number of exercises:&nbsp;
            {parts.reduce((sum, part) => {
                return sum + part.exercises;
            }, 0)}
        </div>
    );
};

const Course = ({ courses, heading }) => {
    return (
        <div>
            <h1>{heading}</h1>

            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <Header course={course} />
                        <Content parts={course.parts} />
                        <Total parts={course.parts} />
                    </div>
                );
            })}
        </div>
    );
};

export default Course;

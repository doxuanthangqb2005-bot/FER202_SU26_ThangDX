//2. Hiển thị thông tin của từng người trong một danh sách gồm 10 người, 
// mỗi người có tên và tuổi ra danh sách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];
    //3. Tìm người đầu tiên trong mảng people là thanh thiếu niên 
    // (tuổi từ 13 đến 19) và hiển thị thông tin của người đó
    const firstTeenager = people.find(person => person.age >= 13 
        && person.age <= 19);
    
    // Check if every person is a teenager (age >= 10 and age <= 20)
    const isEveryoneTeenager = people.every(person => person.age >= 10 && person.age <= 20);
    
    // Check if any person is a teenager (age >= 10 and age <= 20)
    const isAnyoneTeenager = people.some(person => person.age >= 10 && person.age <= 20);
    
    // Sort by name ascending, then by age descending
    const sortedPeople = [...people].sort((a, b) => {
        if (a.name !== b.name) {
            return a.name.localeCompare(b.name);
        }
        return b.age - a.age;
    });
    
    return (
        <>
        <h1>1.List of People</h1>
        <div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} years old</li>
                ))}
            </ul>
        </div>

        <h3>2.Find the first person off the people array is teenager</h3>
        <div>
            {firstTeenager ? (
                <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
            ) : (<p>No teenager found.</p>)}
        </div>

        <h3>3.Check if every person is a teenager (age 10-20)</h3>
        <div>
            <p>Result: {isEveryoneTeenager ? 'YES - All are teenagers' : 'NO - Not all are teenagers'}</p>
        </div>

        <h3>4.Check if any person is a teenager (age 10-20)</h3>
        <div>
            <p>Result: {isAnyoneTeenager ? 'YES - At least one is a teenager' : 'NO - None are teenagers'}</p>
        </div>
        
        <h3>5.People sorted by name (ascending) and age (descending)</h3>
        <div>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPeople.map((person, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                            <td>{index + 1}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
        
    );
}
export default ListPerson;
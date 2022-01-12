// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const lines = prompt("Enter the number of lines of your desired pattern")

for (let line = "*"; line.length <= lines; line += "*")
    console.log(line);
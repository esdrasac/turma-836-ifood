const bcrypt = require('')



const main = async () => {
    const password = "admin";
    const passwordHash = await bcrypt.hash(password, 8);
    const isValidPassword = await bcrypt.compare('admin123', passwordHash);
    
    console.log(password)
    console.log(passwordHash);
    console.log(isValidPassword)
}

main()

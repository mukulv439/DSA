const data  = [
  { user: "u1", date: "2025-01-10", value: 400 },
  { user: "u2", date: "2025-01-10", value: 600 },
  { user: "u3", date: "2025-01-10", value: 500 },

  { user: "u1", date: "2025-01-11", value: 300 },
  { user: "u2", date: "2025-01-11", value: 700 },
  { user: "u3", date: "2025-01-11", value: 200 },

  { user: "u1", date: "2025-01-12", value: 800 },
  { user: "u2", date: "2025-01-12", value: 400 },
  { user: "u3", date: "2025-01-12", value: 900 }
];



const func = function(data) {
  const pk = data.reduce((acc, {user,date,value}) => {

    if(!acc[date]  ||  value > acc[date].value)
    {
       acc[date]={
           date,
           max: user,
           value
           
       } 
    }
    return acc;
  }, []);

 return Object.values(pk);
};

console.log(func(data));

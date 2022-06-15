import express from "express";

const server = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get("/holidays", (_, response) => {
    response.send(holidays);
});

server.get("/holidays/:idMonth", (request, response) => {
    const id = request.params.idMonth;
    const holidayMonthList = holidays.filter((day) => day.date.startsWith(`${id}/`));
    response.send(holidayMonthList);
});

server.get("/is-today-holiday", (_, response) => {
    const today = new Date();
    const isHoliday = holidays.filter((day) => today.toLocaleDateString('en-US') === day.date);
    if(isHoliday.length > 0){
        response.send(`Sim, hoje é ${isHoliday[0].name}`);
    }else{
        response.send("Não, hoje não é feriado");
    }
});

server.listen(5000);
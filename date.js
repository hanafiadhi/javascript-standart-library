{
    date1 = new Date()
    console.log(date1)

    date2 = new Date(2023,02,18)
    console.log(date2)

    date3 = new Date(2023,02,28,12,05,31,143)
    console.log(date3)
}
{
    //epoc & unix timestamp
    date1 = new Date()
    console.log(date1.getTime())

    date2 = new Date(2023,02,18)
    console.log(date2.getTime())

    date3 = new Date(2023,02,28,12,05,31,143)
    console.log(date3.getTime())
}{
    //Date Parsing

    const time = Date.parse("2020-10-10T08:45:45.123+07:00")
    console.log(time)

    const date = new Date(time)
    console.log(date)
}
{
    const date =new Date()
    date.setFullYear(2020)

    console.log(date.getFullYear())
    console.log(date.getMonth())
    console.log(date.getDate())
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())
    console.log(date.getMilliseconds())
    console.log(date.getTimezoneOffset())
}
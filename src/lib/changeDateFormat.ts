const showFormattedDate = (date: any): string => {
    const options: object = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("en-US", options)
}

export default showFormattedDate;
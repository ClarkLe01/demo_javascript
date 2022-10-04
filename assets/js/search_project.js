var filter_byName = (name, data) => {
    if (name.length == 0) return data;
    return data.filter((project) => { return project['name'].includes(name) });
}

var filter_byStartDate = (start, data) => {
    if (start.length == 0) return data;
    return data.filter((project) => { return Date.parse(project['start']) >= Date.parse(start) });
}

var filter_byEndDate = (end, data) => {
    if (end.length == 0) return data;
    return data.filter((project) => { return Date.parse(project['end']) <= Date.parse(end) });
}


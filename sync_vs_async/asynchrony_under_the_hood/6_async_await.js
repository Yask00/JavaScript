async function getAddress() {
    const streetAddress = await getStreetAddress();
    const city = await getCity();
    const state = await getState();
    const zip = await getZipCode();

    return `${streetAddress}, ${city} ${state} ${zip}`;
}

async function getAddress2 () {
    let [
        streetAddress,
        city,
        state,
        zip
    ] = await Promise.all([
        getStreetAddress(),
        getCity(),
        getState(),
        getZip()
    ]);

    return `${streetAddress}, ${city} ${state} ${zip}`;
}
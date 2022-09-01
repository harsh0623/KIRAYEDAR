const Flats = [{
    id: 1,
    userId: "A",
    Flatname: "Flora Enclave",
    address: "GangaPuram,Ghaziabad",
    tenantName: "Harsh",
    tenantPhone: "8445573034",
    rent: 10000,
    startUnit: 56,
    pricePerUnit: 10,
    startDate: "01-04-2022",
    security:8000
},
    {
        id: 2,
        userId: "B",
        Flatname: "Panchsheel",
        address: "GangaPuram,Ghaziabad",
        tenantName: "Saksham",
        tenantPhone: "9546738278",
        rent: 8000,
        startUnit: 33,
        pricePerUnit: 9,
        startDate: "01-06-2022",
        security: 8000
    },
    {
        id: 3,
        userId: "C",
        Flatname: "Gaur Homes",
        address: "GovindPuram,Ghaziabad",
        tenantName: "Saket",
        tenantPhone: "9546345267",
        rent: 9000,
        startUnit: 73,
        pricePerUnit: 8,
        startDate: "01-05-2022",
        security: 9000
    }]

const Payments = [{
    id: 101,
    FlatId: 1,
    date: "01-05-2022",
    amount: 10000
}, {
    id: 102,
    FlatId: 1,
    date: "01-07-2022",
    amount: 10000
    },
    {
        id: 103,
        FlatId: 1,
        date: "01-09-2022",
        amount: 10000
    },
    {
        id: 104,
        FlatId: 2,
        date: "01-07-2022",
        amount: 8000
    }, {
        id: 105,
        FlatId: 2,
        date: "01-08-2022",
        amount: 8000
    },
    {
        id: 106,
        FlatId: 2,
        date: "01-09-2022",
        amount: 8000
    },
    {
        id: 107,
        FlatId: 3,
        date: "01-06-2022",
        amount: 9000
    }, {
        id: 108,
        FlatId: 3,
        date: "01-07-2022",
        amount: 9000
    },
    {
        id: 109,
        FlatId: 3,
        date: "01-09-2022",
        amount: 9000
    }
]

const Rents = [{
    id: 201,
    FlatId: 1,
    rent: 10000,
    startUnit: 56,
    endUnit:72
},
    {
        id: 202,
        FlatId: 1,
        rent: 10000,
        startUnit: 72,
        endUnit: 91
    }, {
        id: 203,
        FlatId: 1,
        rent: 10000,
        startUnit: 91,
        endUnit: 110
    },
    {
        id: 204,
        FlatId: 1,
        rent: 10000,
        startUnit: 110,
        endUnit: 125
    }, {
        id: 205,
        FlatId: 1,
        rent: 10000,
        startUnit: 125,
        endUnit: 150
    },
    {
        id: 206,
        FlatId: 2,
        rent: 8000,
        startUnit: 33,
        endUnit: 52
    },
    {
        id: 207,
        FlatId: 2,
        rent: 8000,
        startUnit: 52,
        endUnit: 76
    }, {
        id: 208,
        FlatId: 2,
        rent: 8000,
        startUnit: 76,
        endUnit: 110
    },
    {
        id: 209,
        FlatId: 3,
        rent: 9000,
        startUnit: 73,
        endUnit: 104
    },
    {
        id: 210,
        FlatId: 3,
        rent: 9000,
        startUnit: 104,
        endUnit: 132
    }, {
        id: 211,
        FlatId: 3,
        rent: 9000,
        startUnit: 132,
        endUnit: 150
    },
    {
        id: 212,
        FlatId: 3,
        rent: 9000,
        startUnit: 150,
        endUnit: 185
    }]

export function getFlats() {
    return Flats;
}
    
export function getPayments() {
    return Payments;
}
export function getRents() {
    return Rents;
}
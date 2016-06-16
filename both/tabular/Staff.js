TabularTables = {};

TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Staff,
    columns: [
        {data: "_id", title: "លេខសំងាត់"},
        {data: "name", title: "ឈ្មោះ"},
        {data: "gender", title: "ភេទ"},
        {data: "address", title: "អាស័យដ្ឋាន"},
        {data: "phone", title: "លេខទូរស័ព្ទ"},

        {
            title: "Action",
            tmpl:Meteor.isClient && Template.staffAction
        }
    ]
});

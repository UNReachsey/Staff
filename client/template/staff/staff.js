Template.staff.helpers({
    data(){
        return Staff.find();
    }
});

Template.staff.events({
    'click .js-remove'(){
        // console.log(this);
        console.log(this._id);

        Staff.remove({_id: this._id});
        Bert.alert('Success Removed', 'danger', 'growl-bottom-right')

    },
    'click #staff-insert'(){
        FlowRouter.go('staffInsert');
    },

    'click .js-update'(){
        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('staffUpdate', {id: this._id});
    }
});


Template.staffInsert.events({
    'click .js-save'(event, instance) {
        event.preventDefault()
        var nameVal = $('.js-name').val();
        var genderVal = $('.js-gender').val();
        var addressVal = $('.js-address').val();
        var phoneVal = $('.js-phone').val();

        Staff.insert({
            name: nameVal,
            gender: genderVal,
            address: addressVal,
            phone: phoneVal
        });

        Bert.alert('Success Inserted', 'info', 'growl-bottom-right')
    }
});


Template.staffInsert.events({
    'click #staff'(){
        FlowRouter.go('staff');
    }
});

//update
Template.staffUpdate.helpers({
    data(){
        let id = FlowRouter.getParam('id');
        return Staff.findOne({_id: id});
    }
});


Template.staffUpdate.events({
    'click #staff'(){
        FlowRouter.go('staff');
    },
    'click .js-save'(event, instance) {
        event.preventDefault()
        var nameVal = $('.js-name').val();
        var genderVal = $('.js-gender').val();
        var addressVal = $('.js-address').val();
        var phoneVal = $('.js-phone').val();

        // Staff.insert({
        //     name: nameVal,
        //     gender: genderVal,
        //     address: addressVal,
        //     phone: phoneVal
        // });
        let id = FlowRouter.getParam('id');
        Staff.update(
            {_id: id},
            {
                $set: {
                    name: nameVal,
                    gender: genderVal,
                    address: addressVal,
                    phone: phoneVal
                }
            }
        );

        Bert.alert('Success Updated', 'info', 'growl-bottom-right');
        FlowRouter.go('staff');
    }
});
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    viewDashboard : (req,res) => {
        res.render('admin/dashboard/index')
    },
}
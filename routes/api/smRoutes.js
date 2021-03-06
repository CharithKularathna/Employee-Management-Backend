const express = require('express');
const router = express.Router();
const auth = require('../../models/authFunctions')
const SecM = require('../../models/sm')
const User = require('../../models/user')

router.get('/allNEmp', auth.authTokenSM, (req, res) => {
    SecM.getNEmp(res)

})

//view of register the users
router.get('/registerEM', auth.authTokenSM, (req, res) => {
    res.render("sm/register", { title: "Register Second Management User" })
})

//register the users
router.post('/registerEM', auth.authTokenSM, (req, res) => {
    SecM.registerEM(req, res)
})

router.get('/editEM', auth.authTokenSM, (req, res) => {
    SecM.editEMView(req, res)

})

router.post('/editEM', auth.authTokenSM, (req, res) => {
    SecM.editEM(req, res)
})

router.post('/removeEM', auth.authTokenSM, (req, res) => {
    SecM.removeEM(req, res)
})

router.get('/allSups', auth.authTokenSM, (req, res) => {
    SecM.getsupervisors(res)
})

router.get('/addSup', auth.authTokenSM, (req, res) => {
    SecM.viewaddsupervisors(res)
})

router.post('/addSup', auth.authTokenSM, (req, res) => {
    SecM.addsupervisors(req, res)
})

router.post('/removeSup', auth.authTokenSM, (req, res) => {

    SecM.removeSup(req, res)
})

router.get('/reports', auth.authTokenSM, (req, res) => {
    res.render('sm/reports', { title: "Reports" })
})

router.get('/userDept', auth.authTokenSM, (req, res) => {
    SecM.user_dept(res)
})
router.get('/userJob', auth.authTokenSM, (req, res) => {
    SecM.user_job(res)
})

router.get('/userPay', auth.authTokenSM, (req, res) => {
    SecM.user_pay(res)
})
router.get('/addcontact', auth.authTokenSM, (req, res) => {
    res.render('sm/emform.ejs', { title: "Add Emergency Detail" })
})

//route to check info
router.get('/checkinfo', auth.authTokenSM, (req, res) => {
    SecM.getEmpdat(req, res)
})

//route to add dependant info
router.get('/adddependant', auth.authTokenSM, (req, res) => {
    res.render('sm/depform.ejs', { title: "Add Dependant Information" })
})

router.post('/saveDepInfo', auth.authTokenSM, (req, res) => {
    User.saveDepInfo(req, res)
})


router.get('/search', auth.authTokenSM, (req, res) => {
    res.render('sm/search', {
        title: "Search"
    })
})

router.post('/search', auth.authTokenSM, (req, res) => {
    SecM.searchId(req, res)
})

router.get('/additionaldet', auth.authTokenSM, (req, res) => {
    SecM.addDet(req, res)
})

router.post('/additionaldet', auth.authTokenSM, (req, res) => {
    User.adddetdb(req, res)
})

router.post('/saveEmDet', auth.authTokenSM, (req, res) => {
    User.saveEmDet(req, res)
})


router.get('/userCustom', auth.authTokenSM, (req, res) => {
    SecM.user_custom(res)
})
router.get('/userLeaves', auth.authTokenSM, (req, res) => {
    SecM.user_leave(res)
})


module.exports = router
/**
 * TestAPIController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    testHomeLib: function (req, res) {
        console.info('Calling Service');
        homeLibServices.getUserInfo().then(data => {
            res.ok(data);
    
        }).catch((err) => {
            console.log('Inside error');
            res.badRequest(err);
        });
    }

};


/**
 * Created by Selector on 23.01.16.
 */

var HelloComponent = React.createClass({
    propTypes: {
        fname : React.PropTypes.string.isRequired,
        lname : React.PropTypes.string.isRequired
    },
    render: function() {
        return <span>Hello {this.props.fname} {this.props.lname}</span>;
    }
})
angular.module('experementApp')
    .directive('helloComponent', function(reactDirective) {
        return reactDirective(HelloComponent);
    });

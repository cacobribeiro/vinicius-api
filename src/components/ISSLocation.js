import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../actions';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(getCurrentISSLocation, 2000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const { latitude, longitude } = this.props;

    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map center={[0, 0]} width={800} height={600} zoom={2}>
            {isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.issLocation.isFetching,
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);

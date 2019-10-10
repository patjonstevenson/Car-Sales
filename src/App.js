import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/index";


const App = props => {


  const removeFeature = feature => {
    // dispatch an action here to remove an item
    props.removeFeature(feature);
  };

  const addFeature = feature => {
    props.addFeature(feature);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
}

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);

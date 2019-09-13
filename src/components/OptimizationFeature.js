import React, { Component } from "react";
import Divider from "./Divider";
import Form from "./Form";
import RecommendationCard from "./RecommendationCard";
import DataGrid from "./DataGrid";

class OptimizationFeature extends Component {
  state = {
    formFields: [
      {
        label: "Param 1",
        unit: "[unit]"
      },
      {
        label: "Param 2",
        unit: "[unit]"
      },
      {
        label: "Param 3",
        unit: "[unit]"
      },
      {
        label: "Param 4",
        unit: "[unit]"
      },
      {
        label: "Param 5",
        unit: "[unit]"
      }
    ],

    form: [],

    optimizationResults: [
      {
        heading: "Optimization Param 1 - Remommendation",
        recommendations: [
          { label: "Recommidation 1-1", value: 0, unit: "[unit]" },
          {
            label: "Recommidation 1-2",
            value: 0,
            unit: "[unit]"
          },
          {
            label: "Recommidation 1-3",
            value: 0,
            unit: "[unit]"
          }
        ]
      },
      {
        heading: "Optimization Param 2 - Remommendation",
        recommendations: [
          {
            label: "Recommidation 2-1",
            value: 0,
            unit: "[unit]"
          },
          {
            label: "Recommidation 2-2",
            value: 0,
            unit: "[unit]"
          },
          {
            label: "Recommidation 2-3",
            value: 0,
            unit: "[unit]"
          }
        ]
      }
    ],
    historicData: {
      columns: [
        "Date",
        "Inputs(p1, p2, p3, p4, p5)",
        "Recommendation 1-1",
        "Recommendation 1-2",
        "Recommendation 1-3",
        "Recommendation 2-1",
        "Recommendation 2-2",
        "Recommendation 2-3"
      ],
      rows: []
    } // {columns: [], rows: []}
  };

  handleSubmit = event => {
    event.preventDefault();
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth(); //Be careful! January is 0 not 1
    const year = currentDate.getFullYear();
    const dateString = date + "/" + (month + 1) + "/" + year;

    const newRow = {
      date: dateString,
      inputs: [
        event.target[0].value,
        event.target[1].value,
        event.target[2].value,
        event.target[3].value,
        event.target[4].value
      ],
      r11: 0, // placeholder for values that need to be calculated for specific needs
      r12: 0,
      r13: 0,
      r21: 0,
      r22: 0,
      r23: 0
    };

    this.setState({
      historicData: {
        ...this.state.historicData,
        rows: [...this.state.historicData.rows, newRow]
      }
    });

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    event.target[3].value = '';
    event.target[4].value = '';

  };

  render() {
    const { formFields, historicData, optimizationResults } = this.state;
    return (
      <div className="feature">
        
        <Divider label="Current Conditions" />
        <Form
          formFields={formFields}
          form={this.state.form}
          handleSubmit={this.handleSubmit}
        />
        <Divider label="Optimization Recommendations" />
        <div className="recom-cards">
          {optimizationResults.map(({ heading, recommendations }, i) => (
            <RecommendationCard
              heading={heading}
              recommendations={recommendations}
              key={i}
            />
          ))}
        </div>
        <Divider label="Recommendation History" />
        <DataGrid columns={historicData.columns} rows={historicData.rows} />
      </div>
    );
  }
}

export default OptimizationFeature;

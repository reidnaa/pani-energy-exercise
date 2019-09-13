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
          { 
            label: "Recommidation 1-1", 
            value: 0, 
            unit: "[unit]" 
          },
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

    //Get the date for data grid
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth(); 
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

      // Make random Numbers with random equations - would be part of some algorithm

      r11: parseInt(event.target[0].value * 1.85).toFixed(2), 
      r12: parseInt(event.target[1].value * 4),
      r13: parseInt(event.target[2].value + 23),
      r21: parseInt(event.target[3].value / 2).toFixed(2),
      r22: parseInt(event.target[4].value + event.target[0].value),
      r23: parseInt(event.target[3].value / event.target[1].value).toFixed(2)
    };

    this.setState({
      historicData: {
        ...this.state.historicData,
        rows: [...this.state.historicData.rows, newRow]
      }
    });

    const newOptimizationResults = [
      {
        heading: this.state.optimizationResults[0].heading,
        recommendations: [
          { 
            label: this.state.optimizationResults[0].recommendations[0].label, 
            value: newRow.r11, 
            unit: "[unit]" 
          },
          {
            label: this.state.optimizationResults[0].recommendations[1].label, 
            value: newRow.r12, 
            unit: "[unit]"
          },
          {
            label: this.state.optimizationResults[0].recommendations[2].label, 
            value: newRow.r13, 
            unit: "[unit]"
          }
        ]
      },
      {
        heading: this.state.optimizationResults[1].heading,
        recommendations: [
          {
            label: this.state.optimizationResults[1].recommendations[0].label, 
            value: newRow.r21, 
            unit: "[unit]"
          },
          {
            label: this.state.optimizationResults[1].recommendations[1].label, 
            value: newRow.r22, 
            unit: "[unit]"
          },
          {
            label: this.state.optimizationResults[1].recommendations[2].label, 
            value: newRow.r23, 
            unit: "[unit]"
          }
        ]
      }
    ];

    this.setState({
      optimizationResults: newOptimizationResults,
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

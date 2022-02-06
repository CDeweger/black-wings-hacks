import React, { Component } from "react";
import axios from "axios";
import OrganizationsCard from "../../components/OrganizationsCard/OrganizationsCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./OrganizationsPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

class OrganizationsPage extends Component {
  state = {
    allOrganizations: [],
    //donationList: [],
  };

  getAllOrganizationsList = () => {
    axios
      .get(`http://localhost:8080/account`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  getDonationList = () => {
    axios
      .get(`http://localhost:8080/donation`)
      .then((res) => {
        this.setState({
          donationList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllOrganizationsList();
    this.getDonationList();
  }

  // componentDidUpdate(prevProps) {
  //   if (!this.props.location.state) return;
  //   if (this.props.location.state.id === prevProps.location.state.id) return;

  //   axios
  //     .get(`${API_URL}organizations`)
  //     .then((res) => {
  //       this.setState({
  //         allOrganizations: res.data,
  //         allOrganizationsList: res.data,
  //       });
  //     })
  //     .catch((_err) => {
  //       console.log("error");
  //     });
  // }

  handleSearchServer = (e) => {
    const query = e.target.value.toLowerCase();
    this.props.history.push({ search: `search=${query}` });

    axios
      .get(`${API_URL}account/?search=${query}`)
      .then((res) => {
        this.setState({
          allOrganizations: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  render() {
    if (!this.state.allOrganizations) {
      return null;
    }

    return (
      <div className="OrganizationsPage">
        <h1 className="OrganizationsPage__title">Non-Profit Organizations</h1>
        <SearchBar
          placeholder="Search for donations, organizations and locations..."
          handleSearch={this.handleSearchServer}
        />

        {this.state.allOrganizations.map((organization) => {
          return (
            <OrganizationsCard
              key={organization.id}
              allOrganizations={organization}
            />
          );
        })}
      </div>
    );
  }
}

export default OrganizationsPage;

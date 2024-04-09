import { useState, useEffect } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx';
import useApi from '../../hooks/useApi.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import FormButton from "../../components/ReportIncident/FormButton.jsx";
import FormButtonContainer from "../../components/ReportIncident/FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";

const CommunityForm = ({ nextStep, handleChange }) => {
  const selectCommunityAndContinue = (community) => {
    handleChange("community")(community);
    nextStep();
  };
  const [communities, setCommunities] = useState([])
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, isLoading, error } = useApi()

  useEffect(() => {
    if (loggedUser) {
      getData({
        route: `/communities/user/${loggedUser._id}`
      })
    }
  }, [loggedUser])

  useEffect(() => {
    data && setCommunities(data)
    data && console.log('data', data)
    error && console.log('error', error)
  }, [data, error])

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {data &&
      <>
        <PageTitle>Seleccionar Comunidad</PageTitle>
        <FormButtonContainer>
          {data && communities.map((community) => (
            <FormButton
              key={community._id}
              onClick={() => selectCommunityAndContinue(community._id)}
            >
              {community.address}
            </FormButton>
          ))}
        </FormButtonContainer>
      </>
      }
    </div>
  );
};

export default CommunityForm;

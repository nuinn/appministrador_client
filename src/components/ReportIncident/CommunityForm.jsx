import { useState, useEffect } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx';
import useApi from '../../hooks/useApi.js'
import FormButton from "../../components/ReportIncident/FormButton.jsx";
import FormButtonContainer from "../../components/ReportIncident/FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";

const CommunityForm = ({ nextStep, handleChange, values }) => {
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
  }, [data])

  return (
    <div>
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
    </div>
  );
};

export default CommunityForm;

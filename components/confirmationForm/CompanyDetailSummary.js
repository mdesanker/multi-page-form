import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import TextOutput from "./TextOutput";

const CompanyDetailSummary = ({ data }) => {
  const { isNew } = useSelector((state) => state.company);

  return (
    <Flex direction="column" gap={1} w="full" alignItems="flex-start" p={2}>
      <TextOutput label="Company ID" value={data.companyId} />
      {isNew && (
        <>
          <TextOutput label="Company Name" value={data.name} />
          <TextOutput label="Location" value={data.location} />
          <TextOutput label="Remote Policy" value={data.policy} />
          <TextOutput label="Company Size" value={data.size} />
          <TextOutput label="Funding Stage" value={data.stage} />
          <TextOutput label="Company URL" value={data.url} />
          <TextOutput label="Admin Name" value={data.name} />
        </>
      )}
      <TextOutput label="Admin Email" value={data.email} />
    </Flex>
  );
};

export default CompanyDetailSummary;

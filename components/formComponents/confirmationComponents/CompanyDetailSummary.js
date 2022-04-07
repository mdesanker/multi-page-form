import { Heading, Text, VStack } from "@chakra-ui/react";
import TextOutput from "./TextOutput";

const CompanyDetailSummary = ({ data }) => {
  return (
    <VStack w="full" alignItems="flex-start" p={2}>
      <TextOutput label="Company ID" value={data.companyId} />
      <TextOutput label="Company Name" value={data.name} />
      <TextOutput label="Location" value={data.location} />
      <TextOutput label="Remote Policy" value={data.policy} />
      <TextOutput label="Company Size" value={data.size} />
      <TextOutput label="Funding Stage" value={data.stage} />
      <TextOutput label="Company URL" value={data.url} />
      <TextOutput label="Admin Name" value={data.name} />
      <TextOutput label="Admin Email" value={data.email} />
    </VStack>
  );
};

export default CompanyDetailSummary;

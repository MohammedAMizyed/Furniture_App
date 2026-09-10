import { Accordion } from "@mantine/core"

export default function Filtering() {
  return (
    <div className="container">
      <Accordion>
        <Accordion.Item value="description">
          <Accordion.Control>Crfc</Accordion.Control>

          <Accordion.Panel>description</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

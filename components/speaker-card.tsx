import Image from "next/image"

interface SpeakerProps {
  speaker: {
    name: string
    role: string
    company: string
    image: string
    topic: string
    description: string
  }
}

export function SpeakerCard({ speaker }: SpeakerProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative">
          <Image
            src={speaker.image || "/placeholder.svg"}
            alt={speaker.name}
            width={300}
            height={400}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 p-6">
          <div className="uppercase text-green-300 text-sm font-medium mb-2">Speaker</div>
          <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
          <p className="text-green-200 text-sm mb-4">
            {speaker.role}, {speaker.company}
          </p>
          <h4 className="text-lg font-semibold mb-3">{speaker.topic}</h4>
          <p className="text-green-100 text-sm">{speaker.description}</p>
        </div>
      </div>
    </div>
  )
}

import clock_hand_hour_bin from './clock-hand-hour.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "clock, hand, hour",
			"translation": [
				0,
				0.006120000034570694,
				0
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "clock, hand, plastic",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0,
					0,
					0,
					1
				],
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.002",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 24,
			"max": [
				0.050000011920928955,
				0.006120309233665466,
				-0.000451456755399704
			],
			"min": [
				-0.050000011920928955,
				-1.1175870895385742e-8,
				-0.443352073431015
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 36,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 330,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 332,
			"uri": clock_hand_hour_bin
		}
	]
}
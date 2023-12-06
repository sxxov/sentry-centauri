import building_16_bin from './building-16.bin?url';
import roof_color_jpg from './roof_color.jpg?url';
import walls_color_jpg from './walls_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior",
		"KHR_materials_emissive_strength"
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
			"name": "Building_16.001",
			"rotation": [
				0.3916293680667877,
				-0.6570770144462585,
				0.2612452805042267,
				0.5887506008148193
			],
			"scale": [
				0.6160157322883606,
				0.6160157918930054,
				0.616015613079071
			],
			"translation": [
				-46.86815643310547,
				14.393754959106445,
				46.997920989990234
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.366482544268505,
						0.366482544268505,
						0.366482544268505
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Roof_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		},
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 1
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.044",
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
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 3169,
			"max": [
				8.79539680480957,
				18.03309440612793,
				9.078668594360352
			],
			"min": [
				-11.962459564208984,
				-10.947469711303711,
				-20.51385498046875
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3169,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 3169,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 13317,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 17575,
			"max": [
				14.13264274597168,
				13.671661376953125,
				18.17383575439453
			],
			"min": [
				-11.088224411010742,
				-15.242382049560547,
				-19.539108276367188
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 17575,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 17575,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 58662,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 24728,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 122000,
			"byteOffset": 24728
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 146728,
			"uri": building_16_bin
		}
	]
}